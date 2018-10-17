import React from 'react';
import PropTypes from 'prop-types'
import * as d3 from 'd3';
import * as viz from '../../utils/d3-viz';

class D3VerticalBPChartFifth extends React.Component {
    componentDidMount() {
        const containerWidth = this.chartRef.parentElement.offsetWidth;
        const margin = { top: 80, right: 0, bottom: 80, left: 0 };
        const width = containerWidth - margin.left - margin.right;
        const height = 10000 - margin.top - margin.bottom;
        let chart = d3.select(this.chartRef).attr("width", width + margin.left + margin.right).attr("height", height + margin.top + margin.bottom);  

        let z = d3.scaleOrdinal()
            .range(d3.schemeCategory20);      

        const data = this.props.data;
 
        let g =[chart.append("g").attr("transform","translate(325,100)")
            ,chart.append("g").attr("transform","translate("+ (width) +", 100)")];   //(width / 2 + 150)

        //chart.append("text").attr("x", 300).attr("y",100)
          //.attr("class","vbp-header").attr('font-size', '14px').attr('font-weight', '700').text("目标出货量");
          
        //chart.append("text").attr("x", width / 2 + 250).attr("y",70)
          //.attr("class","vbp-header").attr('font-size', '14px').attr('font-weight', '700').text("实际出货量");

        let bp=[ viz.bP() // 定义两个BP图
            .data(data)
            .min(12)
            .pad(1)
            .height(1500)
            .width(600)
            .barSize(35)
            .fill(d=>z(d.primary))
          //,viz.bP()
            //.data(data)
            //.value(d=>d[3])
            //.min(12)
            //.pad(1)
            //.height(700)
            //.width(300)
            //.barSize(35)
            //.fill(d=>z(d.primary))
        ];

        [0].forEach(function(i){// 输出两个BP图数据
          g[i].call(bp[i]); // 输出两个BP图
          
          g[i].append("text").attr("x",-50).attr("y",-8).style("text-anchor","middle").text("2017年下");
          g[i].append("text").attr("x", 650).attr("y",-8).style("text-anchor","middle").text("2018年上");
          
          g[i].selectAll(".mainBars")
            .on("mouseover",mouseover)
            .on("mouseout",mouseout);

          g[i].selectAll(".mainBars").append("text").attr("class","label")
            .attr("x",d=>(d.part==="primary"? -30: 30))
            .attr("y",d=>+6)
            .text(d=>d.key)
            .attr("text-anchor",d=>(d.part==="primary"? "end": "start"));
          
          //g[i].selectAll(".mainBars").append("text").attr("class","perc")
          //  .attr("x",d=>(d.part==="primary"? -100: 80))
          //  .attr("y",d=>+6)
          //  .text(function(d){
          //    return d3.format("0.0%")(d.percent);
          //  })
          //  .attr("text-anchor",d=>(d.part==="primary"? "end": "start"));

          g[i].selectAll(".mainBars") // hover
          .append('title')
          .text(function(d){
            return d.key + '\n' + d.value + ' 个repo';
          });

        });

        chart.append('g')// 输出标题
            .attr('class', 'vertical-bp-chart-fifth--title')
            .append('text')
            .attr('fill', '#000')
            .attr('font-size', '16px')
            .attr('font-weight', '700')
            .attr('text-anchor', 'middle')
            .attr('x', containerWidth / 2)
            .attr('y', 20)
            .text('2017年下到2018年上社团演化情况');

        function mouseover(d){
          [0].forEach(function(i){
            bp[i].mouseover(d);
            
            g[i].selectAll(".mainBars").select(".perc")
            .text(function(d){ return d3.format("0.0%")(d.percent)});

            g[i].selectAll(".mainBars")
            .select('title')
            .text(function(d){
              return d.key + '\n' + d.value + ' 个repo';
            });
          });
        }
        function mouseout(d){
          [0].forEach(function(i){
            bp[i].mouseout(d);
            
            g[i].selectAll(".mainBars").select(".perc")
            .text(function(d){ return d3.format("0.0%")(d.percent)});

            g[i].selectAll(".mainBars")
            .select('title')
            .text(function(d){
              return d.key + '\n' + d.value + ' 个repo';
            });
          });
        } 
    }
    render() {
        return (
            <div className="vertical-bp-chart-fifth--sample">
                <svg ref={(r) => this.chartRef = r}></svg>
            </div>
        )
    }
}
D3VerticalBPChartFifth.propTypes = {
  data: PropTypes.arrayOf(PropTypes.arrayOf(
      PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
      ])
    )).isRequired,
}


export default D3VerticalBPChartFifth;