class Node{
  constructor(value){
    this.value = value
    this.left = null
    this.right = null
  }
}

class BinarySearchTree{
  constructor(){
    this.root = null
  }

  insert(value){
    const node = new Node(value)
    if(this.root===null){
      this.root = node
    }
    let curr = this.root
    while(true){
      if(curr.value === value){
        return undefined
      }
      if(value < curr.value){
        if(curr.left === null){
          curr.left = node
          return
        }
        curr = curr.left
      }else{
        if(curr.right === null){
          curr.right = node
          return
        }
        curr = curr.right
      }
    }
  }

  contains(value){
    if(this.root === null){
      return false
    }else{
      let curr = this.root
      while(curr){
        if(value === curr.value){
          return true
        }
        if(value < curr.value){
          curr = curr.left
        }else{
          curr = curr.right
        }
      }
      return false
    }
  }

  delete(value){
    return deleteNode(this.root, value)
  }

  deleteNode(root, value){
    if(root === null){
      return null
    }else if(root.value < value){
      root.left =  this.deleteNode(root.left, value)
    }else if(root.value > value){
      root.right = this.deleteNode(root.right, value)
    }else{

      if(root.left === null){
        return root.right
      }else if(root.right === null){
        return root.left
      }

      root.value = this.minValue(root.right)

      root.right = this.deleteNode(root.right, root.value)
    }
  }

  minValue(node){
    let minValue = node.value
    while(node.value != null){
      minValue = node.left.value
      node = node.left
    }
    return minValue
  }

  BFS(){
    let data = []
    let queue = []
    let node = this.root
    queue.push(node)
    while(queue.length){
      node = queue.shift()
      data.push(node.value)
      if(node.left){
        queue.push(node.left)
      }
      if(node.right){
        queue.push(node.right)
      }
    }
    return data
  }

  DFSPreOrder(){
    let data = []
    function traverse(node){
      data.push(node.value)
      if(node.left) traverse(node.left)
        if(node.right) traverse(node.right)
    }
  traverse(this.root)
  return data
  }

  DFSPostOrder(){
    let data = []
    function traverse(node){
      if(node.left) traverse(node.left)
        if(node.right) traverse(node.right)
          data.push(node.value)
    }
    traverse(this.root)
    return data
  }

  DFSInOrder(){
    let data = []
    function traverse(node){
      if(node.left) traverse(node.left)
        data.push(node.value)
      if(node.right) traverse(node.right)
    }
  traverse(this.root)
  return data
  }
  
}

const BST = new BinarySearchTree()
BST.insert(50)
BST.insert(90)
BST.insert(10)
BST.insert(40)
BST.insert(60)
console.log(BST.BFS())
console.log(BST.DFSPreOrder())
console.log(BST.DFSPostOrder())
console.log(BST.DFSInOrder())