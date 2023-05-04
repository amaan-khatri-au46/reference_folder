// this function is bascially for dividing the arr into 1 single
// the we will call this mergeing fucntion for merging the it

function divide(arr, l, r) {
  if (l === r){
    return [arr[r]];                                            
  }

  let mid = Math.floor((l + r) / 2);

  let LeftArray = divide(arr, l, mid);
  let rightArray = divide(arr, mid + 1, r);

  let MergedArray = merge(LeftArray, rightArray);
  return MergedArray;
}

const arr = [38,3,42,5,7,51];
let sortedArray = divide(arr, 0, arr.length - 1);
console.log(sortedArray);

// in this function we bascially merging the arr into sorted form ...
// const arr1 = [3, 12, 31, 49];
// const arr2 = [5, 9, 20];
function merge(arr1, arr2) {
    let n1 = arr1.length;
    let n2 = arr2.length;
  
    let p1 = 0;
    let p2 = 0;
    let res = [];
  
    while (p1 < n1 && p2 < n2) {
      if (arr1[p1] <= arr2[p2]) {
        res.push(arr1[p1]);
        p1++;
      } else {
        res.push(arr2[p2]);
        p2++;
      }
    }
    while (p1 < n1) {
      res.push(arr1[p1]);
      p1++;
    }
  
    while (p2 < n2) {
      res.push(arr2[p2]);
      p2++;
    }
    return res;
  }


function LLNODE(data, next) {
    this.data = data;
    this.next = next;
  }
  function addNodeElement(head, data) {
    let curr = head;
    while (curr.next !== null) {
      curr = curr.next;
    }
    curr.next = new LLNODE(data, null);
  }
  let head = new LLNODE(1, null);
  addNodeElement(head, 2);
  addNodeElement(head, 3);
  addNodeElement(head, 4);
  addNodeElement(head, 5);
  
  function printLinkedList(head) {
    for (let curr = head; curr !== null; curr = curr.next) {
      console.log(curr.data);
    }
  }
  printLinkedList(head);
  
  console.log("After reversing ---------");
  
  function reverse(head, prev) {
    if (head === null) return prev;
    let next = head.next;
    head.next = prev;
    return reverse(next, head);
  }
  let newhead = reverse(head, null);
  printLinkedList(newhead);



