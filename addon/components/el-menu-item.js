import Component from '@ember/component';
import layout from '../templates/components/el-menu-item';
import {computed, get} from "@ember/object";

export default Component.extend({
  layout,
  tagName: 'li',
  disabled: false,

  submenu: false,
  classNameBindings: ['getMenuClass',
  'disabled:is-disabled'],

  role: 'menuitem',
  attributeBindings: ['role'],

  getMenuClass: computed('submenu', function () {

    if (get(this, 'submenu')) {
      return 'el-submenu';
    } else {
      return 'el-menu-item';
    }
  }),


  click(){
    if(this.get('action')){
      this.get('action')();
    }
  }

});
