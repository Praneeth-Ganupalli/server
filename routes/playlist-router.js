const express = require("express");
const playListController = require("../controller/playlistController");
const authController = require("../controller/authController");
const router = express.Router();
router.use(authController.protected);
router.route("/").get(playListController.getAllPlayLists).post(playListController.uploader.single('imageCover'),playListController.createPlaylist);
router.get("/myPlaylists",playListController.getMyPlaylists);
router.get("/:slug",playListController.getPlayList);
router.delete("/:id",playListController.deletePlayList);
router.patch("/:playlistId/song/addSong",playListController.addSongToPlaylist);
router.delete("/:playlistId/song/:songId/removeSong",playListController.deleteSongFromPlaylist);
module.exports=router;