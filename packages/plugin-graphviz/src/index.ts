import { Plugin } from 'bytemd';
import GraphvizView from './GraphvizView.svelte';

export interface BytemdGraphvizOptions {}

export default function graphviz({}: BytemdGraphvizOptions = {}): Plugin {
  return {
    test(node) {
      return node.type === 'element' && node.tagName === 'graphviz';
    },
    component: GraphvizView
  };
}
