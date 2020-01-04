class CreateUsers < ActiveRecord::Migration[5.2]

  def up
    # , :id => false will ignore id
    create_table :users do |t|
      t.column "first_name", :string, :limit => 25

      # t.string is shorthand
      t.string "last_name", :limit => 50
      t.string "email", :default => '', :null => false
      t.string "password", :limit => 50
      
      t.timestamps
      # t.timestamps is equavlent to created_at and updated_at
      # t.datetime "created_at"
      # t.datetime "updated_at"
    end
  end

  def down
    drop_table :users
  end

end
