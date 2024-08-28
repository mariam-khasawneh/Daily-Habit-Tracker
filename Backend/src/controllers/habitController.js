const Habit = require("../models/habitModel");

class HabitController {
  // Add a new habit
  async addHabit(req, res) {
    console.log(req.body);
    try {
      const habit = new Habit(req.body);
      await habit.save();
      res.status(201).json(habit);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  // Get all habits
  async getHabits(req, res) {
    try {
      const habits = await Habit.find({ isDeleted: false });
      res.status(200).json(habits);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  // Get deleted habits
  async getDeletedHabits(req, res) {
    try {
      const habits = await Habit.find({ isDeleted: true });
      res.status(200).json(habits);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  // Get a single habit by ID
  async getHabitById(req, res) {
    try {
      const habit = await Habit.findById(req.params.id);
      if (!habit) return res.status(404).json({ message: "Habit not found" });
      res.status(200).json(habit);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  // Update a habit
  async updateHabit(req, res) {
    try {
      const habit = await Habit.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
      if (!habit) return res.status(404).json({ message: "Habit not found" });
      res.status(200).json(habit);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  // Delete a habit
  async deleteHabit(req, res) {
    try {
      const habit = await Habit.findByIdAndDelete(req.params.id);
      if (!habit) return res.status(404).json({ message: "Habit not found" });
      res.status(200).json({ message: "Habit deleted" });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  // Soft delete a habit (set isDeleted to true)
  async softDeleteHabit(req, res) {
    try {
      const habit = await Habit.findByIdAndUpdate(
        req.params.id,
        { isDeleted: true },
        { new: true }
      );
      if (!habit) return res.status(404).json({ message: "Habit not found" });
      res.status(200).json({ message: "Habit has been marked as deleted" });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  // Restore a habit (set isDeleted to false)
  async restoreDeletedHabit(req, res) {
    try {
      const habit = await Habit.findByIdAndUpdate(
        req.params.id,
        { isDeleted: false },
        { new: true }
      );
      if (!habit) return res.status(404).json({ message: "Habit not found" });
      res.status(200).json({ message: "Habit has been restored" });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  // Track habit progress
  async trackProgress(req, res) {
    try {
      const habit = await Habit.findById(req.params.id);
      if (!habit) return res.status(404).json({ message: "Habit not found" });

      // Assuming progress is passed in the request body
      habit.progress.push(req.body.progress);
      await habit.save();

      res.status(200).json(habit);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  // Filter habits by category or tag
  async filterHabits(req, res) {
    try {
      const { category, tag } = req.query;
      const query = {};

      if (category) query.category = category;
      if (tag) query.tags = tag;

      const habits = await Habit.find({ ...query, isDeleted: false });
      res.status(200).json(habits);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  // Search habits by name or description
  async searchHabits(req, res) {
    try {
      const { searchTerm } = req.query;
      const habits = await Habit.find({
        $text: { $search: searchTerm },
        isDeleted: false,
      });
      res.status(200).json(habits);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
}

module.exports = new HabitController();
