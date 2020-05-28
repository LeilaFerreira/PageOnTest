import Vue from 'vue'
import Router from 'vue-router'
import  Bar  from 'vue-chartjs'
import PaginaInicial from '@/components/PaginaInicial'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'PaginaInicial',
      component: PaginaInicial
    }
     
  ],
  extends: Bar,
  mounted () {
    this.renderChart(data, options)
  }
})
