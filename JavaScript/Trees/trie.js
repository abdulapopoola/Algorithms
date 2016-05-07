'use strict';

function Node(data){
    this.data = data;
    this.children = {};
    this.prefixes = 0;
    this.isWord = false;
}

class Trie {
    constructor(){
        this.root = new Node('');
    }
    
    add(word){
        if(!this.root){
            return null;
        }
        
        this.addNode(this.root, word);
    }
    
    addNode(node, word){
        if(!node || !word){
            return null;
        }
        
        node.prefixes++;
        const char = word.charAt(0);
        let child = node.children[char];
        if(!child){
            child = new Node(char);
            node.children[char] = child;
        }
        const remainder = word.slice(1);
        if(!remainder) {
            child.isWord = true;
        }
        
        this.addNode(child, remainder);        
    }
}