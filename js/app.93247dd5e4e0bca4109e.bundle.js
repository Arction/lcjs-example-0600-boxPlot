(self.webpackChunk=self.webpackChunk||[]).push([[524],{44:(e,t,r)=>{const a=r(89),{lightningChart:i,emptyTick:s,ColorHEX:o,SolidFill:l,SolidLine:n,AxisTickStrategies:u,AutoCursorModes:d,PointShape:p,UIElementBuilders:m,Themes:h}=a,c=i({resourcesBaseUrl:new URL(document.head.baseURI).origin+new URL(document.head.baseURI).pathname+"resources/"}).ChartXY({theme:h[new URLSearchParams(window.location.search).get("theme")||"darkGold"]||void 0}).setTitle("Age distribution across professions").setAutoCursorMode(d.disabled),g=c.getDefaultAxisX().setTitle("Profession").setTickStrategy(u.Empty).setMouseInteractions(!1);c.getDefaultAxisY().setTitle("Age").setScrollStrategy(void 0).setInterval({start:10,end:63,stopAxisAfter:!1}).setMouseInteractions(!1),[{name:"Software developer",data:{lowerExtreme:17.5,lowerQuartile:19.6,median:21.2,upperQuartile:28.5,upperExtreme:48.1,outliers:[50.1]}},{name:"Cashier",data:{lowerExtreme:14,lowerQuartile:19.5,median:20.1,upperQuartile:26.7,upperExtreme:41.6,outliers:[52.2,59.9]}},{name:"Janitor",data:{lowerExtreme:15.2,lowerQuartile:18.5,median:22.7,upperQuartile:34.1,upperExtreme:41,outliers:[]}}].forEach(((e,t)=>{const r=e.data,a=c.addBoxSeries().setDefaultStyle((e=>e.setBodyWidth(.7).setTailWidth(.7))),i=c.addPointSeries({pointShape:p.Circle}).setPointSize(20);a.onMouseEnter(((e,t)=>i.setHighlight(!0))),a.onMouseLeave(((e,t)=>i.setHighlight(!1))),i.onMouseEnter(((e,t)=>a.setHighlight(!0))),i.onMouseLeave(((e,t)=>a.setHighlight(!1)));const s=1*t,o=s+1,l=(s+o)/2;a.add({start:s,end:o,lowerExtreme:r.lowerExtreme,lowerQuartile:r.lowerQuartile,median:r.median,upperQuartile:r.upperQuartile,upperExtreme:r.upperExtreme}),r.outliers.forEach((e=>{i.add({x:l,y:e})})),g.addCustomTick().setValue(l).setTextFormatter((()=>e.name)).setGridStrokeLength(0)}))}},e=>{e.O(0,[502],(()=>(44,e(e.s=44)))),e.O()}]);