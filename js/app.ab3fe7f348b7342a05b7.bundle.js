(self.webpackChunk=self.webpackChunk||[]).push([[143],{138:(e,t,r)=>{const i=r(475),{lightningChart:s,emptyTick:o,ColorHEX:a,SolidFill:l,SolidLine:u,AxisTickStrategies:n,AutoCursorModes:d,PointShape:p,UIElementBuilders:m,Themes:h}=i,g=s().ChartXY({}).setTitle("Age distribution across professions").setAutoCursorMode(d.disabled),x=g.getDefaultAxisX().setTitle("Profession").setTickStrategy(n.Empty).setMouseInteractions(!1);g.getDefaultAxisY().setTitle("Age").setScrollStrategy(void 0).setInterval({start:10,end:63,stopAxisAfter:!1}).setMouseInteractions(!1),[{name:"Software developer",data:{lowerExtreme:17.5,lowerQuartile:19.6,median:21.2,upperQuartile:28.5,upperExtreme:48.1,outliers:[50.1]}},{name:"Cashier",data:{lowerExtreme:14,lowerQuartile:19.5,median:20.1,upperQuartile:26.7,upperExtreme:41.6,outliers:[52.2,59.9]}},{name:"Janitor",data:{lowerExtreme:15.2,lowerQuartile:18.5,median:22.7,upperQuartile:34.1,upperExtreme:41,outliers:[]}}].forEach(((e,t)=>{const r=e.data,i=g.addBoxSeries().setDefaultStyle((e=>e.setBodyWidth(.7).setTailWidth(.7))),s=g.addPointSeries({pointShape:p.Circle}).setPointSize(20);i.onMouseEnter(((e,t)=>s.setHighlight(!0))),i.onMouseLeave(((e,t)=>s.setHighlight(!1))),s.onMouseEnter(((e,t)=>i.setHighlight(!0))),s.onMouseLeave(((e,t)=>i.setHighlight(!1)));const o=1*t,a=o+1,l=(o+a)/2;i.add({start:o,end:a,lowerExtreme:r.lowerExtreme,lowerQuartile:r.lowerQuartile,median:r.median,upperQuartile:r.upperQuartile,upperExtreme:r.upperExtreme}),r.outliers.forEach((e=>{s.add({x:l,y:e})})),x.addCustomTick().setValue(l).setTextFormatter((()=>e.name)).setGridStrokeLength(0)}))}},e=>{e.O(0,[736],(()=>(138,e(e.s=138)))),e.O()}]);