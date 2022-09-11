import jsTPS_Transaction from "../../common/jsTPS.js";
/**
 * AddSong_Transaction
 *
 * This class represents a transaction that works with adding
 * a song. It will be managed by the transaction stack.
 *
 * @author McKilla Gorilla
 * @author Soroush Semer
 */
export default class AddSong_Transaction extends jsTPS_Transaction {
  constructor(initModel, initTitle, initArtist, initYouTubeId) {
    super();
    this.model = initModel;
    this.title = initTitle;
    this.artist = initArtist;
    this.youTubeId = initYouTubeId;
  }

  doTransaction() {
    this.model.addNewSong(null, this.title, this.artist, this.youTubeId);
  }

  undoTransaction() {
    this.model.deleteSong(this.model.getPlaylistSize() - 1);
  }
}
