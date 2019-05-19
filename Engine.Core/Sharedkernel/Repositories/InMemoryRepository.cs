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
            if (_database == null)
            {
                _database = database;
            }
        }

        private static IDictionary<TIdType, TEntityType> _database;

        protected IDictionary<TIdType, TEntityType> Database => _database;

        public virtual void Add(TEntityType entity)
        {
            if (entity == null)
            {
                Logger.Log("You cannot add empty entity");
                return;
            }

            Database.Add(entity.Id, entity);
        }

        public virtual void Delete(TIdType id) => Database.Remove(id);

        public virtual void Edit(TEntityType entity)
        {
            if (entity == null)
            {
                Logger.Log("You cannot edit empty entity");
                return;
            }

            Delete(entity.Id);
            Add(entity);
        }

        public virtual TEntityType GetById(TIdType id) => (from entity in Database where entity.Value.Id.Equals(id) select entity.Value).FirstOrDefault();

        public virtual IEnumerable<TEntityType> List() => Database.Values.ToList();

        public virtual IEnumerable<TEntityType> List(Func<TEntityType, bool> predicate) => Database.Values.Where(predicate);
    }
}
