var myVideo = document.getElementById("bnn-video");

$('#bnn-modal').on('shown.bs.modal', function (e) {
    console.log('diste click a play');
    toggleFullscreen( myVideo );
    myVideo.play();
})

$('#bnn-modal').on('hidden.bs.modal', function (e) {
    console.log('diste click a play');
    myVideo.pause();
})

function toggleFullscreen( video ) {
    if(video.requestFullScreen){
        video.requestFullScreen();
    } else if(video.webkitRequestFullScreen){
        video.webkitRequestFullScreen();
    } else if(video.mozRequestFullScreen){
        video.mozRequestFullScreen();
    }
}