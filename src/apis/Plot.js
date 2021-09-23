import functionPlot from "function-plot";

const Plot = (equation, target) => {
	const width = 900;
	const height = 800;

	return functionPlot({
		target,
		width,
		height,
		yAxis: { domain: [-1, 9] },
		grid: true,
		data: [
			{
				fn: equation,
			},
		],
	});
};

export default Plot;
