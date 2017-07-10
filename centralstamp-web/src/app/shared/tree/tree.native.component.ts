/**
 * Created by seif on 7/3/17.
 */
import {Component, Input} from "@angular/core";
@Component({
  selector: 'native-tree',
  templateUrl:'tree.native.component.html',
  styleUrls:['./tree.component.css']
})
export class NativeTreeComponent {
  @Input() _nodes: Node[] = [new Node("1", "node1"), new Node("2", "node2", [new Node("3", "node2_1")]), new Node("4", "name4", [new Node("1", "node1"), new Node("2", "node2", [new Node("3", "node2_1")])])];
  @Input() nodeDeep : number;
  @Input() _expand: boolean = true;
  constructor(){
    console.log('constructor : ');

  }

  expandOrCollapse(node: Node){
    node._expand = !node._expand;
  }

}

export class Node {

  id: string;
  name: string;
  nodes: Node[];
  hasChilds: boolean = false;
  _expand: boolean;

  constructor(id: string, name: string, nodes?: Node[]) {
    this.id = id;
    this.name = name;
    this.nodes = nodes ? nodes : null;
    this.hasChilds = this.nodes ? true : false;
    this._expand = this.nodes ? true : false;
  }

}
