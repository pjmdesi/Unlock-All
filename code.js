// This plugin unlocks all locked layers on the current page
// I find this type of thing super useful in some cases, for instance: when replacing several locked background layers from an inported Sketch file. That's the exact situation I was in when I developed this plugin.
const node = figma.currentPage;
const nodes = node.findAll(node => node.locked == true);
const nodesno = nodes.length;
console.log(nodesno);
if (nodesno > 0) {
    nodes.forEach(i => {
        i.locked = false;
    });
    alert(nodesno + ' layer' + (nodesno == 1 ? ' has' : 's have') + ' been unlocked!');
}
else {
    alert('No layers are locked');
}
figma.closePlugin();
