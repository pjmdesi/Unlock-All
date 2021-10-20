// This plugin unlocks all locked layers on the current page
// I find this type of thing super useful in some cases, for instance: when replacing several locked background layers from an inported Sketch file. That's the exact situation I was in when I developed this plugin.


// Get the current page
const node = figma.currentPage;

// Get all locked layers on the page
const nodes = node.findAll(node => node.locked == true);

// Number of locked layers on page
const nodesno = nodes.length;

// console.log(nodesno);

// If there are locked layers
if (nodesno > 0) {

	// Unlock them all!
	nodes.forEach(i => {
		i.locked = false;
	});

	// Tell user how many
	alert(nodesno + ' layer'+(nodesno==1?' has':'s have')+' been unlocked!');
} else {

	// If there are no locked layers
	alert('No layers are locked');
}

figma.closePlugin();
