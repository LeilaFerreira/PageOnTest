<script>
import { Bar } from "vue-chartjs";

export default {
  extends: Bar,
  mounted() {
   var chart=JSON.parse(localStorage.getItem('listAtendimento'))
    this.renderChart(
      {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December"
        ],
        datasets: [
          {
            label: "Data One",
            backgroundColor: "#f87979",
            data: [
                  chart[0].planejado, chart[1].planejado, chart[2].planejado, 
                  chart[3].planejado, chart[4].planejado,chart[5].planejado, chart[6].planejado,
                  chart[7].planejado,chart[8].planejado,chart[9].planejado,chart[10].planejado,chart[11].planejado, 
                  ]
          }
        ]
      },
      { responsive: true, maintainAspectRatio: false }
    );
  }
};
</script>
