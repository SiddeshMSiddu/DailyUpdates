class Node{
    constructor(value){
        this.value=value;
        this.next=null;
    }
   
}
function findMiddle(head) {
       let slow=head;
       let fast=head;     
       while(fast && fast.next){
       slow= slow.next;
        fast=fast.next.next;
       }
       return slow.value;
}
const head = new Node(10);
head.next = new Node(25);
head.next.next = new Node(45);
head.next.next.next = new Node(47);
head.next.next.next.next = new Node(57);

console.log("Middle Element:", findMiddle(head));