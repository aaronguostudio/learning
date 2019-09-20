def query(objecg)
  order = objecg.order

  @relation = @relation.
    active.where(
      target_id:  objecg.target_id,
      other_id:   [order.other_id, nil],
      type:       "type"
    )

  select_region_rates
end

private

def select_region_rates
  @relation = @relation.
    select('DISTINCT ON (name) *').
end
