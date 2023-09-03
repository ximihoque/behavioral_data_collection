

var video_trial_1_1 = {
    type: "video-button-response",
    stimulus: [`/video/one.mp4`],
    // choices: ["Continue"],
    // button_html: '<div style="font-size:40px;">%choice%</div>',
    // margin_vertical: "2px",
    // margin_horizontal: "2px",
    // prompt: video_prompt,
    width: window.screen.width - 100,
    height: window.screen.height - 100,
    autoplay: true,
    response_ends_trial: true,
    response_allowed_while_playing: false,
    trial_ends_after_video: true,
    data: {
        time: function () {
            var n = new Date();
            return n.getTime();
        },
    },
    on_start: () => {
        if (!isRecording) {
            mediaRecorder.start()
            isRecording = true
        }
    },
    // on_finish: () => {
    //     chunk_n = 0;
    // },
    extensions: [
        {
            type: "webgazer",
            params: {
                targets: ["#jspsych-video-button-response-stimulus"],
            },

        },
    ],
    start: 0,
    stop: 40,
};


video_1_duration = 233
probe_interval = 40
var video_1 = [
    video_trial_1_1,
]
for (let i = 1; i < Math.round(video_1_duration/probe_interval) - 1; i++) {
    // console.log('here')
    var video_trial_1_n = { ...video_trial_1_1 }
    video_trial_1_n['start'] = i * probe_interval
    video_trial_1_n['stop'] = video_trial_1_n['start'] + 40
    video_1.push(video_trial_1_n)
}
if (video_1[video_1.length-1]['stop'] < video_1_duration) {
    var video_trial_1_n = {...video_trial_1_1}
    video_trial_1_n['start'] = video_1[video_1.length-1]['stop']
    video_trial_1_n['stop'] = video_trial_1_n['start'] + 40
    video_1.push(video_trial_1_n)
}
video_1[video_1.length - 1]['on_finish'] = () => {
    chunk_n = 0
}


// console.log(video_1)