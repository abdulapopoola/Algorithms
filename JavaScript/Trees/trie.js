'use strict';

function Node(data) {
    this.data = data;
    this.children = {};
    this.prefixes = 0;
    this.isWord = false;
}

class Trie {
    constructor() {
        this.root = new Node('');
    }

    add(word) {
        if (this.isValid()) {
            this.addNode(this.root, word);
        }
    }

    remove(word) {
        if (this.isValid()) {
            this.removeNode(this.root, word);
        }
    }

    contains(word) {
        if (this.isValid()) {
            this.containsWord(this.root, word)
        }
    }

    addNode(node, word) {
        if (this.ensureParams(node, word)) {
            node.prefixes++;
            const char = word.charAt(0);
            let child = node.children[char];
            if (!child) {
                child = new Node(char);
                node.children[char] = child;
            }
            const remainder = word.slice(1);
            if (!remainder) {
                child.isWord = true;
            }

            this.addNode(child, remainder);
        }
    }

    removeNode(node, word) {
        if (!node || !word) {
            return null;
        }

        node.prefixes++;
        const char = word.charAt(0);
        let child = node.children[char];
        if (!child) {
            child = new Node(char);
            node.children[char] = child;
        }
        const remainder = word.slice(1);
        if (!remainder) {
            child.isWord = true;
        }

        this.removeNode(child, remainder);
    }

    containsWord(node, word) {

    }

    isValid() {
        return !!this.root;
    }

    ensureParams(node, word) {
        return !!node && !!word;
    }
}