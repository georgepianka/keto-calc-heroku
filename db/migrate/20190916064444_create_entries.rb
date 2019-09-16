class CreateEntries < ActiveRecord::Migration[5.2]
  def change
    create_table :entries do |t|
      t.references :day, foreign_key: true
      t.float :net_carbs
      t.float :calories
      t.float :protein
      t.float :fat

      t.timestamps
    end
  end
end
