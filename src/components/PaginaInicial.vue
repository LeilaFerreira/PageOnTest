<template>
<div>
<nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" role="navigation">
<div class="container">
        <a class="navbar-brand size-logo" href="#">
        <img src="assets/logo.png" alt="Logo" />
      </a>

       <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#conteudoNavbarSuportado"
        aria-controls="conteudoNavbarSuportado"
        aria-expanded="false"
        aria-label="Alterna navegação"
       
      >
        <span class="navbar-toggler-icon"></span>
      </button>
        <div class="collapse navbar-collapse navbar-size" id="conteudoNavbarSuportado">
            <ul class="nav navbar-nav">
            
                <li class="nav-item active"><a class="nav-link" href="#sobre"> O Programa </a></li>
                <li class="nav-item"><a class="nav-link" href="#como-funciona">Como Funciona</a></li>
                <li class="nav-item"><a class="nav-link" href="#parceiros">Parceiros</a></li>
                <li class="nav-item"><a class="nav-link" href="#contato">Contato</a></li>
            </ul>     
            <ul class="nav navbar-nav flex-row justify-content-between ml-auto">
                <li class="dropdown order-1">
                    <button type="button" id="dropdownMenu1" data-toggle="dropdown" 
                      class="btn btn-outline-secondary dropdown-toggle">Login 
                      <span class="caret"></span>
                    </button>                
                </li>
            </ul>
        </div>
</div>
</nav>
<div class="container-fluid">
      <div class="row">
        <nav class="col-md-2 d-none d-md-block bg-light sidebar pt-3 ">
          <div class="sidebar-sticky">
            <ul class="nav flex-column">
              <li class="nav-item">
                <a class="nav-link active" href="#">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-home"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
                  Dashboard <span class="sr-only">(current)</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-file"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path><polyline points="13 2 13 9 20 9"></polyline></svg>
                  Orders
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-shopping-cart"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
                  Products
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-users"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                  Customers
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-bar-chart-2"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>
                  Reports
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-layers"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
                  Integrations
                </a>
              </li>
            </ul>
            <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
              <span>Saved reports</span>
              <a class="d-flex align-items-center text-muted" href="#">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus-circle"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg>
              </a>
            </h6>
            <ul class="nav flex-column mb-2">
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-file-text"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                  Current month
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-file-text"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                  Last quarter
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-file-text"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                  Social engagement
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-file-text"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                  Year-end sale
                </a>
              </li>
            </ul>
          </div>
        </nav>
<main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4 dashboard"><div class="chartjs-size-monitor" style="position: absolute; left: 0px; top: 0px; right: 0px; bottom: 0px; overflow: hidden; pointer-events: none; visibility: hidden; z-index: -1;"><div class="chartjs-size-monitor-expand" style="position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;"><div style="position:absolute;width:1000000px;height:1000000px;left:0;top:0"></div></div><div class="chartjs-size-monitor-shrink" style="position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;"><div style="position:absolute;width:200%;height:200%;left:0; top:0"></div></div></div>
    <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 class="h2">Dashboard</h1>
          <div class="btn-toolbar mb-2 mb-md-0">
              <div class="btn-group mr-2">
                <button class="btn btn-sm btn-outline-secondary">Share</button>
                <button class="btn btn-sm btn-outline-secondary">Export</button>
              </div>
              <button class="btn btn-sm btn-outline-secondary dropdown-toggle">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-calendar"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                This week
              </button>
            </div>
          </div>

          <div class="my-4 w-100 chartjs-render-monitor" id="myChart" width="870" height="366" style="display: block; height: 333px; width: 791px;">
          <div class="small">
          <BarChart></BarChart>
            </div>
          </div>

       <br>  <br>  <br>  <br>
      <div class="table-responsive">
            <table class="table table-striped table-sm">
              <thead>
                <tr>
                  <th>Data</th>
                  <th>Demanda</th>
                  <th>Capacidade</th>
                  <th>Atendimento Planejado</th>
                  <th>Atendimento Realizado</th>
                  <th>Serviço</th>
                </tr>
              </thead>
              <tbody>
         
                <tr v-for="item in this.listAtendimento()" :key="item.id" >
                  <td> {{ item.data }} </td>
                  <td> {{ item.demanda }}</td>
                  <td> {{ item.capacidade }}</td>
                  <td> {{ item.planejado }}</td>
                  <td> {{ item.atendimentoRealizado }}</td>
                  <td> {{ item.desvio }}</td>
                </tr>
          

                </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
</div>
</template>
<script>
import  BarChart  from "./BarChart.vue"

export default {
  name: 'PaginaInicial',
  
  components:{
    BarChart
  },

   mounted() {
       this.listAtendimento()
       //salvando a lista na sessao, para utilizar no grafico
        localStorage.setItem('listAtendimento', JSON.stringify( this.listAtendimento()));
     
     },
  
  data(){
     return {
      chartData: {
        Books: 100,
        Magazine: 123,
        Newspapers: 58
      }
    
    }
    
  },

  methods: {
    listAtendimento(){        
    return  [
      {
        "id": 1,
        "data": "2020-04-25",
        "demanda": 92,
        "capacidade": 1,
        "planejado": 87,
        "atendimentoRealizado": 73,
        "desvio": 56
      },
      {
         "id": 2,
        "data": "2020-05-06",
        "demanda": 1,
        "capacidade": 47,
        "planejado": 87,
        "atendimentoRealizado": 18,
        "desvio": 4
      },
      {
         "id": 3,
        "data": "2020-03-11",
        "demanda": 21,
        "capacidade": 55,
        "planejado": 33,
        "atendimentoRealizado": 5,
        "desvio": 17
      },
      {
         "id": 4,
        "data": "2020-04-17",
        "demanda": 62,
        "capacidade": 11,
        "planejado": 85,
        "atendimentoRealizado": 51,
        "desvio": 43
      },
      {
         "id": 5,
        "data": "2020-04-26",
        "demanda": 25,
        "capacidade": 32,
        "planejado": 100,
        "atendimentoRealizado": 94,
        "desvio": 60
      },
      {
         "id": 6,
        "data": "2020-01-27",
        "demanda": 70,
        "capacidade": 83,
        "planejado": 57,
        "atendimentoRealizado": 19,
        "desvio": 56
      },
      {
         "id": 7,
        "data": "2020-02-17",
        "demanda": 52,
        "capacidade": 68,
        "planejado": 65,
        "atendimentoRealizado": 91,
        "desvio": 35
      }
    ]

    }
   
}
  
}
 
</script>
<style scoped>


.dashboard {
margin-top: 73px;
}
.chartjs-render-monitor {
    -webkit-animation: chartjs-render-animation 0.001s;
    animation: chartjs-render-animation 0.001s;
}
.text-inicial {
  text-align: justify;

  padding: 80px 30px 81px 30px;
  font-family: Roboto;
  font-size: 18px;
  margin-right: auto;
  display: flex;
  align-items: center;
  color: #000000;
}
.imag-style {
  position: absolute;
  width: 100%;

  /* left: 4px; */
}
.text-funcion {
  /* position: absolute; */
  width: 284px;
  height: 41px;
  /* left: calc(50% - 284px/2 - 0.5px);
top: calc(50% - 41px/2 - 299.5px); */
  color: #5a297b;

  font-family: Roboto;

  font-weight: bold;
  font-size: 35px;
  line-height: 41px;
  /* identical to box height */
}
.eclipse {
  /* position: absolute; */
  width: 108px;
  height: 108px;

  border-radius: 100%;
  background: #3391ff;
}
.box-login {
  right: 0 !important;
  left: auto !important;
  padding: 0;
  margin: 0;
}


</style>
