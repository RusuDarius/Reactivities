using AutoMapper;
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
            private readonly IMapper _mapper;

            public Handler(DataContext context, IMapper mapper)
            {
                _mapper = mapper;
                _context = context;
            }

            public async Task Handle(Command request, CancellationToken cancellationToken)
            {
                if (request is not null)
                {
                    var activityToUpdate = await _context.Activities.FirstOrDefaultAsync(
                        act => act.Id == request.Activity.Id
                    );
                    if (activityToUpdate is not null)
                    {
                        _mapper.Map(request.Activity, activityToUpdate);
                        await _context.SaveChangesAsync();
                    }
                }
            }
        }
    }
}
