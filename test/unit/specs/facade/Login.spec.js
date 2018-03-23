import Vue from 'vue';
import Login from '@/components/facade/Login';

describe('Login.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Login);
    const vm = new Constructor().$mount();
    expect(vm.$el.querySelector('.login h1').textContent)
      .to.equal('May the Force be with you');
  });
});
