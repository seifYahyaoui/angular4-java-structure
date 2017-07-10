/**
 * Created by seif on 7/3/17.
 */
import {Component} from "@angular/core";

@Component({
  selector: 'tree-central-stamp',
  templateUrl: './tree.component.html'
})
export class TreeComponent {
  nodes = [
    {
      id: 1,
      name: 'group1',
      children: [
        { id: 2, name: 'child1' },
        { id: 3, name: 'child2' }
      ]
    },
    {
      id: 4,
      name: 'group2',
      children: [
        { id: 5, name: 'child2.1' },
        {
          id: 6,
          name: 'child2.2',
          children: [
            {
              id: 1,
              name: 'group1',
              children: [
                { id: 2, name: 'child1' },
                { id: 3, name: 'child2' }
              ]
            }
          ]
        }
      ]
    }
  ];
}
