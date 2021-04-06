{
    // 기존에 타입에서 필요 없는 것을 제외... 제한적인 타입을 만들 수 있음
    // 기존에 없는 타입도 추가 가능...
    type Video = {
      id: string;
      title: string;
      url: string;
      data: string;
    };
  
    type VideoMetadata = Omit<Video, "url" | "data">;
    // = Pick<T, Exclude< "url" | "data">>;
  
    // 무거운 api
    function getVideo(id: string): Video {
      return {
        id,
        title: "video",
        url: "https://..",
        data: "byte-data..",
      };
    }
  
    // 원하는 속성만...
    function getVideoMetadata(id: string): VideoMetadata {
      return {
        id: id,
        title: "title",
      };
    }
  }
  