import jsTPS_Transaction from "../../common/jsTPS.js";
/**
 * RemoveSong_Transaction
 *
 * This class represents a transaction that works with removing a song.
 *  It will be managed by the transaction stack.
 *
 * @author McKilla Gorilla
 * @author Soroush Semer
 */
export default class RemoveSong_Transaction extends jsTPS_Transaction {
  constructor(
    initModel,
    initOldIndex,
    initOldTitle,
    initOldArtist,
    initOldYouTubeId
  ) {
    super();
    this.model = initModel;
    this.oldIndex = initOldIndex;
    this.oldTitle = initOldTitle;
    this.oldArtist = initOldArtist;
    this.oldYouTubeId = initOldYouTubeId;
  }

  doTransaction() {
    this.model.deleteSong(this.oldIndex);
  }

  undoTransaction() {
    this.model.addNewSong(
      this.oldIndex,
      this.oldTitle,
      this.oldArtist,
      this.oldYouTubeId
    );
  }
}
