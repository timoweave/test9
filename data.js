const config = {};
config.margin = {
  top: 20,
  bottom: 20,
  left: 10,
  right: 10
}

let template = `
hello there
what's up?
this is cool!
`;

config.width = window.innerWidth - config.margin.left - config.margin.right;
config.height = window.innerHeight - config.margin.top - config.margin.bottom;

console.log(config);

d3.csv('activity.csv', selectFields, processData);

function processData(error, data) {
  d3.select('#timeline')
    .append('svg')
    .attr({
      'width': config.width,
      'height': config.height
    })
    .append('g');

  // .attr('transform', `translate(${config.margin.left},${config.margin.top})`);
}

function selectFields(d) {
  return {
    amount: +d.Amount,
    category: d.Category,
    transdate: new Date(d.TransDate)
  };
}

function buildTimeline(data) {

}
