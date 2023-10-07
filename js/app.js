// document.querySelectorAll('.cursor').forEach(node => {
//     document.addEventListener('mousemove', e => {
//         node.style.cssText = `--move-x: ${e.clientX}px; --move-y: ${e.clientY}px;`
//     })
// })

// Упростим код,  можно не проходить циклом, а обращаться к тегу body
document.addEventListener('mousemove', e => {
	document.body.style.cssText = `--move-x: ${e.clientX}px; --move-y: ${e.clientY}px;`
})