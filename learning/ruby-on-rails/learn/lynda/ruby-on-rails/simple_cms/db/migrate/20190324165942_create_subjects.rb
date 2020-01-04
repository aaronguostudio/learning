class CreateSubjects < ActiveRecord::Migration[5.2]
  def up
    create_table :subjects do |t|
      t.string "name", :limit => 100, :null => false
      t.integer "position"
      t.boolean "visible", :default => false
      t.timestamps
    end
    puts "*** Adding an index ***"
    add_index("subjects", "name")
  end

  def down
    drop_table :subjects
  end
end
