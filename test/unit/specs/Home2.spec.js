import Vue from 'vue';
import Home2 from '@/components/Home2';

describe('Home2.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Home2);
    const vm = new Constructor().$mount();
    expect(vm.$el.querySelector('.home2 h1').textContent)
      .to.equal('May the Force be with you');
  });
});
