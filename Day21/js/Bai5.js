const watchHistory = [
  { userId: 1, videoId: "A1", duration: 10 },
  { userId: 2, videoId: "B1", duration: 15 },
  { userId: 1, videoId: "A1", duration: 20 },
  { userId: 3, videoId: "C1", duration: 30 },
  { userId: 2, videoId: "B1", duration: 5 },
  { userId: 1, videoId: "A2", duration: 25 },
  { userId: 3, videoId: "C1", duration: 15 },
];

//  Tính tổng thời gian xem của từng video.
const totalVideo = (watchHistory) => {
  return watchHistory.reduce((acc, cur) => {
    acc[cur.videoId] = (acc[cur.videoId] || 0) + cur.duration;
    return acc;
  }, {});
};
console.log(totalVideo(watchHistory));

// - Tìm video được xem nhiều nhất (dựa trên tổng thời gian).
const searchTopVideo = (watchHistory) => {
  return Object.entries(totalVideo(watchHistory)).reduce(
    (acc, cur) => {
      const videoId = cur[0];
      const duration = cur[1];
      if (acc.duration < duration) {
        return {
          videoId,
          duration,
        };
      }
      return acc;
    },
    {
      duration: 0,
    }
  );
};
console.log(searchTopVideo(watchHistory));

// - Nhóm lịch sử xem theo userId, trong đó mỗi userId sẽ chứa danh sách các video mà họ đã xem và tổng thời gian xem mỗi video.
const groupByUser = (watchHistory) => {
  return watchHistory.reduce((acc, cur) => {
    acc[cur.userId] = acc[cur.userId] || {};
    acc[cur.userId][cur.videoId] =
      (acc[cur.userId][cur.videoId] || 0) + cur.duration;
    return acc;
  }, {});
};
console.log(groupByUser(watchHistory));
