import jsTPS_Transaction from "../../common/jsTPS.js";
/**
 * EditSong_Transaction
 *
 * This class represents a transaction that works with editing songs.
 *  It will be managed by the transaction stack.
 *
 * @author McKilla Gorilla
 * @author Soroush Semer
 */
export default class MoveSong_Transaction extends jsTPS_Transaction {
  constructor(
    initModel,
    index,
    initOldTitle,
    initOldArtist,
    initOldYouTubeId,
    initNewTitle,
    initNewArtist,
    initNewYouTubeId
  ) {
    super();
    this.model = initModel;
    this.oldTitle = initOldTitle;
    this.oldArtist = initOldArtist;
    this.oldYouTubeId = initOldYouTubeId;
    this.newTitle = initNewTitle;
    this.newArtist = initNewArtist;
    this.newYouTubeId = initNewYouTubeId;
    this.index = index;
  }

  doTransaction() {
    this.model.editSong(
      this.index,
      this.newTitle,
      this.newArtist,
      this.newYouTubeId
    );
  }

  undoTransaction() {
    this.model.editSong(
      this.index,
      this.oldTitle,
      this.oldArtist,
      this.oldYouTubeId
    );
  }
}
