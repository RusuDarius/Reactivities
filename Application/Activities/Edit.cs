using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Activities
{
    public class Edit
    {
        public class Command : IRequest
        {
            public Activity Activity { get; set; }
        }

        public class Handler : IRequestHandler<Command>
        {
            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task Handle(Command request, CancellationToken cancellationToken)
            {
                try
                {
                    if (request is not null)
                    {
                        var updatedActivity = await _context.Activities.FirstOrDefaultAsync(
                            act => act.Id == request.Activity.Id
                        );
                        if (updatedActivity is not null)
                        {
                            updatedActivity.Title = request.Activity.Title;
                            updatedActivity.Date = request.Activity.Date;
                            updatedActivity.Description = request.Activity.Description;
                            updatedActivity.Category = request.Activity.Category;
                            updatedActivity.City = request.Activity.City;
                            updatedActivity.Venue = request.Activity.Venue;

                            await _context.SaveChangesAsync();
                        }
                    }
                }
                catch (System.Exception)
                {
                    throw new Exception("No activity found in the database.");
                }
            }
        }
    }
}
