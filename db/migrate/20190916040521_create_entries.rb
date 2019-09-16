class CreateEntries < ActiveRecord::Migration[5.2]
  def change
    create_table :entries do |t|
      t.references :user, foreign_key: true
      t.date :date
      t.float :calories
      t.float :net_carbs
      t.float :weight
      t.float :protein
      t.float :fat

      t.timestamps
    end
  end
end
