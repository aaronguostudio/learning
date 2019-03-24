class CreatePages < ActiveRecord::Migration[5.2]
  def up
    create_table :pages do |t|
      t.integer "subject_id"
      t.string "name", :limit => 100
      t.integer "permalink"
      t.integer "position"
      t.boolean "visible", :default => false
      t.timestamps
    end
    puts "*** Adding an index ***"
    add_index("pages", "subject_id")
    add_index("pages", "permalink")
  end

  def down
    drop_table :pages
  end
end
