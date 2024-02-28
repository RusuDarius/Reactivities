using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Activities
{
    public class Delete
    {
        public class Command : IRequest
        {
            public Guid Id { get; set; }
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
                if (request is not null)
                {
                    var activityToDelete = await _context.Activities.FirstOrDefaultAsync(
                        activity => activity.Id == request.Id
                    );
                    // var activity_to_delete = await _context.Activities.FindAsync(request.Id);
                    if (activityToDelete is not null)
                    {
                        _context.Activities.Remove(activityToDelete);
                        await _context.SaveChangesAsync();
                    }
                }
            }
        }
    }
}
