"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const review_controller_1 = require("../controllers/review.controller");
const reviewRouter = (0, express_1.Router)();
reviewRouter.route("/").get(review_controller_1.getAllReviews);
reviewRouter.route("/:music_id").get(review_controller_1.getReviewsById);
exports.default = reviewRouter;
