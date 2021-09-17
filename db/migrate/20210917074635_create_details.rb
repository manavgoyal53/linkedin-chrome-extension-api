class CreateDetails < ActiveRecord::Migration[6.1]
  def change
    create_table :details do |t|
      t.string :fname
      t.string :lname
      t.string :cname

      t.timestamps
    end
  end
end
