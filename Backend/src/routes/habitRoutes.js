const express = require("express");
const router = express.Router();
const HabitController = require("../controllers/habitController");

// router.post("/", HabitController.addHabit);
// router.get("/", HabitController.getHabits);
// router.get("/:id", HabitController.getHabitById);
// router.put("/:id", HabitController.updateHabit);
// router.delete("/:id", HabitController.deleteHabit);

// add a new habit
router.post("/", HabitController.addHabit.bind(HabitController));

// get all habits
router.get("/", HabitController.getHabits.bind(HabitController));

// get deleted habits
router.get("/deleted", HabitController.getDeletedHabits.bind(HabitController));

// get a single habit by ID
router.get("/:id", HabitController.getHabitById.bind(HabitController));

// update a habit
router.put("/:id", HabitController.updateHabit.bind(HabitController));

// permanently delete a habit
router.delete("/:id", HabitController.deleteHabit.bind(HabitController));

// soft delete a habit (set isDeleted to true)
router.patch(
  "/:id/soft-delete",
  HabitController.softDeleteHabit.bind(HabitController)
);

// Restore a habit
router.patch(
  "/:id/restore",
  HabitController.restoreDeletedHabit.bind(HabitController)
);

// Track habit progress
router.post(
  "/:id/progress",
  HabitController.trackProgress.bind(HabitController)
);

// Filter habits by category or tag
router.get("/filter", HabitController.filterHabits.bind(HabitController));

// Search habits by name or description
router.get(
  "/habits/search",
  HabitController.filterHabits.bind(HabitController)
);

module.exports = router;
