var playlist = {song_one: "Big Song"};

function updatePlaylist(obj, key, value) {
  return Object.assign({}, obj, {[key]: value})
}
