define([
		'backbone',
		"mustache",
		'packages/CustomView',
		'text!templates/players/invit.html',
        'collections/friends',
        'views/players/userInvitationItem'
		],
function(
		Backbone,
		Mustache,
		CustomView,
		InvitTemplate,
        Friends,
        UserInvitationItemView
){
	return  CustomView.extend({

        refreshBtn: true,
        backBtn: false,
        settingsBtn: false,
        validateBtn: true,

        initialize: function(opts)
        {
        	this.constructor.__super__.initialize.apply(this, opts);
        	if(this.events)
        	{
        		this.events = _.defaults(this.events, CustomView.prototype.events);
        	}
        	else
        	{
        		this.events = CustomView.prototype.events;
        	}

        	this.router = opts.router;

            var html = Mustache.to_html(InvitTemplate,{});

            $('#main-content').html(html);

            this.friends = new Friends();
            this.fetchData();
        },

        events: {
            'click #refreshBtn': 'refreshClick',
            'click #validateBtn': 'validateClick',
        },

        fetchData: function()
        {
            $("#refreshBtn").addClass('rotate');
            var self = this;
            this.friends.fetch({
                error: function () {
                },
                success: function () {
                    $("#refreshBtn").removeClass('rotate');
                    self.render();
                }    
            });
        },

        render: function()
        {
                var self = this, friendItem;
                $("#usersList").html('');
                self.friends.each(function(friend, index, friends)
                {             
                        friendItem = new UserInvitationItemView({
                                model: friend,
                                router: self.router,
                                collection: self.friends
                        });

                        $("#usersList").append(friendItem.render().el);
                });
        },

        refreshClick: function(e)
        {
            this.fetchData();
        },

        validateClick: function(e)
        {
            this.undelegateEvents();
            this.router.navigate("dashboard", {trigger: true, replace: true});
        }
	});
});