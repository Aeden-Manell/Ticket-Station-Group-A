var
  filters = {
    // user: null,
    // status: null,
    // milestone: null,
    // priority: null,
    
    date: null,
    region: null,
    tags: null
    
  };

function updateFilters() {
  $('.event-list-row').hide().filter(function() {
    var
      self = $(this),
      result = true; // not guilty until proven guilty
    
    Object.keys(filters).forEach(function (filter) {
      if (filters[filter] && (filters[filter] != 'Show All Events') && (filters[filter] != 'Any')) {
        result = result && filters[filter] === self.data(filter);
      }
    });

    return result;
  }).show();
}

function changeFilter(filterName) {
  filters[filterName] = this.value;
  updateFilters();
}

// Assigned Region Dropdown Filter
$('#assigned-region-filter').on('change', function() {
  changeFilter.call(this, 'region');
});


// Assigned User Dropdown Filter
$('#assigned-user-filter').on('change', function() {
  changeFilter.call(this, 'user');
});

// Task Status Dropdown Filter
$('#status-filter').on('change', function() {
  changeFilter.call(this, 'status');
});

// Task Milestone Dropdown Filter
$('#milestone-filter').on('change', function() {
  changeFilter.call(this, 'milestone');
});

// Task Priority Dropdown Filter
$('#priority-filter').on('change', function() {
  changeFilter.call(this, 'priority');
});

// Task Tags Dropdown Filter
$('#tags-filter').on('change', function() {
  changeFilter.call(this, 'tags');
});

/*
future use for a text input filter
$('#search').on('click', function() {
    $('.box').hide().filter(function() {
        return $(this).data('order-number') == $('#search-criteria').val().trim();
    }).show();
});*/