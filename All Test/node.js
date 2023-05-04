// class TreeNode {
//     constructor (data , left , right){
//         this.data = data;
//         this.left = left;
//         this.right = right;
//     }
// }
 
// const root = new TreeNode(9, null, null);
// const node2 = new TreeNode(15, null, null);
// const node3 = new TreeNode(3, null, null);
// root.left = node3;
// root.right = node2;
// const node4 = new TreeNode(20, null, null);
// node3.left = node4;
// const node5 = new TreeNode(7, null, null);
// node3.right = node5;

// function inorder(root) {
//     if (root === null) return;
//     inorder(root.left);
//     console.log(root.data);
//     inorder(root.right);
//   }
//   console.log("inorder is 20,3,7,9,15")
//   inorder(root)

//   function preorder(root){
//   if(root == null)
//   return;
//   console.log(root.data)
//   preorder(root.left)
//   preorder(root.right)
//   }
//   console.log ("preorder is 1, 3,4,5,2,6")
//   preorder(root)
  


//   function postorder(root){
//     if(root == null)
//     return;
//     postorder(root.left)
//     postorder(root.right)
//     console.log(root.data)
//     }
//     console.log ("postorder 4,5,3,6,2,1")
//     postorder(root)



// Q5. write a program to reverse a linked list using recursion

// function LLNODE(data, next) {
//   this.data = data;                                                 
//   this.next = next;
// }
// function addNodeElement(head, data) {
//   let curr = head;
//   while (curr.next !== null) {
//     curr = curr.next;
//   }
//   curr.next = new LLNODE(data, null);
// }
// let head = new LLNODE(1, null);
// addNodeElement(head, 2);
// addNodeElement(head, 3);
// addNodeElement(head, 4);
// addNodeElement(head, 5);

// function printLinkedList(head) {
//   for (let curr = head; curr !== null; curr = curr.next) {
//     console.log(curr.data);
//   }
// }
// printLinkedList(head);

// console.log("After reversing ---------");

// function reverse(head, prev) {           
//   if (head === null) return prev;      
//   let next = head.next;                   
//   head.next = prev;                       
//   return reverse(next, head);
// }
// let newhead = reverse(head, null);
// printLinkedList(newhead);


function fibTab(n){
    let dp = {0:0, 1: 1 };
    for (var i=2; i<=n ; i++){
        dp[i] = dp[i-1] + dp[i-2]
    }
    return dp[n]
}
console.log(fibTab(7))

