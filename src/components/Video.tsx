const Video = () => {
  console.log('video');
  return (
    <div>
      <iframe
        width="640"
        height="360"
        src="https://www.youtube.com/embed/VIDEO_ID"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Video;
