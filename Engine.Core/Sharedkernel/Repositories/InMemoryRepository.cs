using System;
using System.Collections.Generic;
using System.Linq;
using Engine.Core.Sharedkernel.Utilities;

namespace Engine.Core.Sharedkernel.Repositories
{
    public class InMemoryRepository<TEntityType, TIdType> : IRepository<TEntityType, TIdType>
        where TEntityType : IAbstractEntity<TIdType>
        where TIdType : IEquatable<TIdType>
    {
        private static readonly ILoggerService Logger = new LoggerService(typeof(InMemoryRepository<TEntityType, TIdType>));

        public InMemoryRepository() : this(new Dictionary<TIdType, TEntityType>())
        {
        }

        public InMemoryRepository(IDictionary<TIdType, TEntityType> database)
        {
            Database = database;
        }

        protected IDictionary<TIdType, TEntityType> Database { get; }

        public void Add(TEntityType entity)
        {
            if (entity == null)
            {
                Logger.Log("You cannot add empty entity");
                return;
            }

            Database.Add(entity.Id, entity);
        }

        public void Delete(TIdType id) => Database.Remove(id);

        public void Edit(TEntityType entity)
        {
            if (entity == null)
            {
                Logger.Log("You cannot edit empty entity");
                return;
            }

            Delete(entity.Id);
            Add(entity);
        }

        public TEntityType GetById(TIdType id) => (from entity in Database where entity.Value.Id.Equals(id) select entity.Value).FirstOrDefault();

        public IEnumerable<TEntityType> List() => Database.Values.ToList();

        public IEnumerable<TEntityType> List(Func<TEntityType, bool> predicate) => Database.Values.Where(predicate);
    }
}
