class CreateHabits < ActiveRecord::Migration[7.0]
  def change
    create_table :habits do |t|
      t.string :habit
      t.string :frequency

      t.timestamps
    end
  end
end
