const sharp = require("sharp");

sharp("Original.png").resize(80).grayscale().toFile("resized.png");
