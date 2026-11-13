import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { DragDropContext } from '@hello-pangea/dnd'
import { toast } from 'react-toastify'
import Column from '../Column/Column'
import { MainWrapper, MainBlock, MainContent, Loader, LoaderContainer } from './Main.styled'
import styled from 'styled-components'
import { useTasks } from '../../context/TaskContext'
import { useAuth } from '../../context/AuthContext'

const ErrorText = styled.div`
  text-align: center;
  color: red;
  padding: 50px 0;
  font-size: 18px;
`

function Main() {
  const { tasks, isLoading, error, fetchTasks, updateTask } = useTasks()
  const { token } = useAuth()
  const location = useLocation()

  useEffect(() => {
    if (!token) return;

    const controller = new AbortController();

    if (location.pathname === '/') {
      fetchTasks(controller.signal);
    }

    return () => {
      controller.abort();
    };
  }, [location.pathname, fetchTasks, token])

  const columns = ['Без статуса', 'Нужно сделать', 'В работе', 'Тестирование', 'Готово']

  const onDragEnd = async (result) => {
    const { destination, source, draggableId } = result

    if (!destination) return

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return
    }

    const taskToMove = tasks.find((t) => t._id === draggableId)
    if (!taskToMove) return

    const newStatus = destination.droppableId

    try {
      await updateTask(draggableId, {
        ...taskToMove,
        status: newStatus,
      })
      toast.success(`Задача перемещена в "${newStatus}"`)
    } catch (err) {
      toast.error('Не удалось переместить задачу')
    }
  }

  return (
    <MainWrapper>
      <div className="container">
        <MainBlock>
          {isLoading ? (
            <LoaderContainer>
              <Loader />
            </LoaderContainer>
          ) : error ? (
            <ErrorText>{error}</ErrorText>
          ) : (
            <DragDropContext onDragEnd={onDragEnd}>
              <MainContent>
                {columns.map((columnTitle) => {
                  const columnCards = tasks.filter(
                    (card) => card.status === columnTitle
                  )
                  return (
                    <Column
                      key={columnTitle}
                      title={columnTitle}
                      cards={columnCards}
                    />
                  )
                })}
              </MainContent>
            </DragDropContext>
          )}
        </MainBlock>
      </div>
    </MainWrapper>
  )
}

export default Main